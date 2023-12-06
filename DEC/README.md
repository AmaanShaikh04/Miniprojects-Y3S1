# Heart Disease Estimator

## About the Dataset
I sourced the dataset for this project from UCI (University of California, Irvine): [Heart Disease Dataset](https://archive.ics.uci.edu/ml/datasets/heart+disease). It encompasses a set of meticulously chosen features by domain experts, enabling the prediction of whether an individual is likely to have heart disease.

## Exploratory Data Analysis (EDA)
For a detailed exploration of the dataset, refer to the "Heart Disease Analysis" notebook. This analysis provides valuable insights into the distribution, correlations, and patterns within the data.

## Model Training
In the realm of healthcare models, prioritizing false positives over false negatives is a common practice. To achieve this, I undertook the training of various classification models. Performance evaluation metrics, including the classification matrix, recall, precision, and accuracy, were employed. Additionally, I manually selected different threshold levels to fine-tune the models and mitigate false negatives. The details of this process can be found in the "Heart Disease Prediction" notebook.

Throughout the training phase, certain models, such as Decision Tree and Random Forest, exhibited remarkable accuracy, even achieving 100%. Subsequently, I opted for the Random Forest model and validated its performance on a separate validation set, yielding robust and reliable results.

## Flask API
For wider accessibility, I have deployed the API on the Heroku cloud platform. You can interact with the API by checking the provided [interface](https://user-images.githubusercontent.com/40850370/128129482-0848a108-e73e-4e8a-a545-f09fca4fe080.png).

This project is a testament to the comprehensive exploration of data, strategic model training, and the deployment of a user-friendly API. It not only showcases the technical aspects of machine learning but also emphasizes its practical applications in healthcare scenarios.