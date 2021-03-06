async function postData(data) {
  const url =
    "https://script.google.com/macros/s/AKfycbyaY8lg8Ba_0oh3I5Q-X6HReYwStOwIYVhOjBK-zk1bvhWs9BKL2bi17-GEpvjUI5pyhA/exec";
  let res = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.json();
}

async function doPOST() {
  console.log("==============================");

  const $gamename = document.getElementById("post-gamename");
  const $username = document.getElementById("post-username");
  const $score = document.getElementById("post-score");
  const $text = document.getElementById("post-text");

  // validate input values
  if (
    $gamename.value.trim() == false ||
    $username.value.trim() == false ||
    ($score.value.trim() == false && $score.value.trim() != 0)
  ) {
    alert("Please fill the <input>");
    return;
  }

  // do POST request.
  $text.textContent = "Please wait. This page is waiting server response ⏳ (Check the Console)";
  console.log("[doPost()] : Start POST process");

  const requestData = {
    gamename: $gamename.value,
    username: $username.value,
    score: parseInt($score.value),
  };

  console.log("[doPost()] : your request json");
  console.log("[doPost()] : ", requestData);

  const response = await postData(requestData);

  // show result to User.
  console.log("[doPost()] : receive response from server");
  console.log("[doPost()] : ", response);

  if (response.status == "success") {
    $text.textContent = "All is Done Successfully ✅ (Check the Console)";
  } else {
    $text.textContent = "Something went wrong 😜 (Check the Console)";
  }
}
