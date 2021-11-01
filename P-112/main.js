

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);

function modelLoaded()
{
  console.log('Model Loaded!');
}

function check()
{
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
  if (error)
  {
    console.error(error);
  }
  else
  {
    console.log(results);
    document.getElementById("object_name").innerHTML = results[0].label;
  }
}