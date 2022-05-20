async function getData(params) {
  const baseURL =
    "https://script.google.com/macros/s/AKfycbwSiezrpRCWE7z4bhgVERa5a9PR_BxR1enY_50LCUyFXh1nbZznxihiFrYYaAl05LnKsw/exec";
  const { gamename, getNumber, sortMethod } = params;

  const res = await fetch(
    `${baseURL}?gamename=${gamename}&getNumber=${getNumber}&sortMethod=${sortMethod}`
  );
  return res.json();
}

async function doGET() {
  console.log("==============================");

  $gamename = document.getElementById("get-gamename");
  $getnumber = document.getElementById("get-number");
  $sortmethod = document.getElementById("get-sortmethod");
  $text = document.getElementById("get-text");

  // validate input values
  if (
    $gamename.value.trim() == false ||
    $getnumber.value.trim() == false ||
    $sortmethod.value.trim() == false
  ) {
    alert("Please fill the <input>");
    return;
  }

  // do GET request.
  $text.textContent = "Please wait. This page is waiting server response ⏳ (Check the Console)";
  console.log("[doGET()] : Start GET process");

  const requestData = {
    gamename: $gamename.value,
    getNumber: $getnumber.value,
    sortMethod: $sortmethod.value,
  };
  console.log("[doGET()] : your request parameters");
  console.log("[doGET()] : ", requestData);

  const response = await getData(requestData);

  // show result to User.
  console.log("[doGET()] : receive response from server");
  console.log("[doGET()] : ", response);

  if (response.status == "success") {
    $text.textContent = "All is Done Successfully ✅ (Check the Console)";
  } else {
    $text.textContent = "Something went wrong 😜 (Check the Console)";
  }
}
