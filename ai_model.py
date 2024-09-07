from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

# Lade das Modell
model = load_model('model.h5')

# Funktion zur Vorhersage des Kleidungsstücks
def predict_clothing(image_path):
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    img_array /= 255.0

    prediction = model.predict(img_array)
    return np.argmax(prediction, axis=1)[0]
