let hour= document.querySelector(".h")
let minute= document.querySelector(".m")
let second=document.querySelector(".s")


 const updatetime=() => {
    const now = new Date();
//console.log(now);
const istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
  const istTime = new Date(now.getTime() + istOffset);

  // Extract hours, minutes, and seconds
  const hours = String(istTime.getUTCHours()).padStart(2, "0");
  const minutes = String(istTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(istTime.getUTCSeconds()).padStart(2, "0");

hour.innerText=`${hours}`;
minute.innerText=`${minutes}`;
second.innerText=`${seconds}`;



setInterval( updatetime, 1000);

};
updatetime();


const displaydate=() => {
    const today = new Date();
    
    // Format the date (e.g., January 26, 2025)
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-IN', options);
    console.log(formattedDate);
    
    // Display the date on the page
    document.getElementById('date').innerText = ` ${formattedDate}`;};
    displaydate();
    const hours = String(istTime.getUTCHours()).padStart(2, "0");
  const minutes = String(istTime.getUTCMinutes()).padStart(2, "0");
  const seconds = String(istTime.getUTCSeconds()).padStart(2, "0");
    
    if (hours=== "00" && minutes === "52" && seconds=== "00") {
      document.body.classList.add("blur");
      removeBlurButton.classList.remove("hidden"); // Show the button
    }
  
  
  // Function to remove the blur effect
  const removeBlur = () => {
    document.body.classList.remove("blur"); // Remove blur
    removeBlurButton.classList.add("hidden"); // Hide the button
  };
  removeBlurButton.addEventListener("click", removeBlur);
