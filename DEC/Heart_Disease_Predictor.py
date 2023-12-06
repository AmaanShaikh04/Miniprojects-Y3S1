import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import scipy.stats as stats

from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.model_selection import GridSearchCV

from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import RandomForestClassifier,AdaBoostClassifier,GradientBoostingClassifier

from sklearn.metrics import SCORERS
from sklearn.metrics import plot_confusion_matrix,plot_roc_curve,classification_report,accuracy_score,confusion_matrix
df = pd.read_csv('Converted_data_set')
X = df.drop('target',axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=101)
X_test,X_validate,y_test,y_validate = train_test_split(X_test, y_test, test_size=0.50, random_state=42)
scaler = StandardScaler()

X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)
X_validate_scaled = scaler.transform(X_validate)


def trainModel(model, X_train, X_test, y_train, y_test):
      model.fit(X_train, y_train)
      y_pred = model.predict(X_test)

      print(classification_report(y_test, y_pred))
      print(plot_confusion_matrix(model, X_test, y_test))
      print(plot_roc_curve(model, X_test, y_test))


def trainModelGrid(model, X_train, X_test, y_train, y_test):
      model.fit(X_train, y_train)
      y_pred = model.predict(X_test)
      print(model.best_params_)
      print(classification_report(y_test, y_pred))
      print(plot_confusion_matrix(model, X_test, y_test))

model = LogisticRegression()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

# Because In this I can accept more +ve than false-negative
model = LogisticRegression()
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.4,1,0) # Choosing custom thresold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))

model = SVC()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

model = SVC()

param = {'C':[1.0,2,5,10,50,100],
    'kernel': ['rbf','linear'],
    'degree':[3,4],
    'gamma':['scale','auto']}

gridModel = GridSearchCV(model,param_grid=param,scoring='accuracy',cv=5,verbose=2)
trainModelGrid(gridModel,X_train_scaled,X_test_scaled,y_train,y_test)

model = SVC(C=50,probability=True)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.4,1,0) # Choosing a custom threshold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))

SCORERS.keys()
model = KNeighborsClassifier(1)
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

errors = []
for i in range(1, 25):
      model = KNeighborsClassifier(i)
      model.fit(X_train_scaled, y_train)
      y_pred = model.predict(X_test_scaled)
      error = 1 - accuracy_score(y_test, y_pred)
      errors.append(error)

plt.plot(range(1, 25), errors)

model = KNeighborsClassifier(n_neighbors=1)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.2,1,0) # Choosing custom thresold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))

model = DecisionTreeClassifier()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

model = RandomForestClassifier()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)


model = RandomForestClassifier()

param = {'n_estimators':[100,120,130,140,150,160],
    'max_depth':[3,4,5,None],
    'min_samples_split':[2,3],
    'min_samples_leaf':[1]}

gridModel = GridSearchCV(model,param_grid=param,scoring='accuracy',cv=5,verbose=2)
trainModelGrid(gridModel,X_train_scaled,X_test_scaled,y_train,y_test)

model = RandomForestClassifier(n_estimators=120)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.4,1,0) # Choosing custom thresold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))
model = AdaBoostClassifier()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

model = AdaBoostClassifier()

param = {'n_estimators':[100,120,130,140,150,160],
       'learning_rate':[1.0,2,0.5,0.6]}

gridModel = GridSearchCV(model,param_grid=param,scoring='accuracy',cv=5,verbose=2)
trainModelGrid(gridModel,X_train_scaled,X_test_scaled,y_train,y_test)

model = AdaBoostClassifier(n_estimators=100)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.5,1,0) # Choosing custom thresold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))

model = GradientBoostingClassifier()
trainModel(model,X_train_scaled,X_test_scaled,y_train,y_test)

model = GradientBoostingClassifier()

param = {'n_estimators':[100,120,130,140,150,160],
       'learning_rate':[1.0,2,0.5,0.6,0.8,0.9]}

gridModel = GridSearchCV(model,param_grid=param,scoring='accuracy',cv=5,verbose=2)
trainModelGrid(gridModel,X_train_scaled,X_test_scaled,y_train,y_test)

model = GradientBoostingClassifier(n_estimators=130,learning_rate=1)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_test_scaled)[:,1]
y_pred = np.where(prob >=0.5,1,0) # Choosing custom thresold
print(classification_report(y_test,y_pred))
print(confusion_matrix(y_test,y_pred))

# Here I will Not tune model This is a final accuracy of the model

model = RandomForestClassifier(n_estimators=120)
model.fit(X_train_scaled,y_train)
prob = model.predict_proba(X_validate_scaled)[:,1]

y_pred = np.where(prob >=0.4,1,0) # Choosing a custom threshold

print(classification_report(y_validate,y_pred))
print(confusion_matrix(y_validate,y_pred))

model = DecisionTreeClassifier()
model.fit(X_train_scaled,y_train)

y_pred = model.predict(X_validate_scaled)

print(classification_report(y_validate,y_pred))
print(confusion_matrix(y_validate,y_pred))

from joblib import dump
df = pd.read_csv('Converted_data_set')
X = df.drop('target',axis=1)
y = df['target']

scaler = StandardScaler()

X_scaled = scaler.fit_transform(X)

model = RandomForestClassifier()
model.fit(X_scaled,y)
dump(scaler,'featureScaler.pkl')
dump(model,'HeartDiseasePredictor.pkl')