import json
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import pandas as pd

with open('procrastination_dataset.json', 'r') as f:
    data = json.load(f)

df = pd.DataFrame(data)

X = df.drop('procastinated', axis=1)
y = df['procastinated']

encoder = OneHotEncoder(sparse=False)
X_encoded = pd.concat([X.drop('mood', axis=1), pd.DataFrame(encoder.fit_transform(X[['mood']]))], axis=1)

scaler = StandardScaler()
X_normalized = scaler.fit_transform(X_encoded)

X_train, X_test, y_train, y_test = train_test_split(X_normalized, y, test_size=0.2, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print("Accuracy:", accuracy)