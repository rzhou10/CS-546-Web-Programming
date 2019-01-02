(
    function() {
        const palindromeMethods = {
            checkForPalindrome(text) {
                if (typeof text != "string") {
                    throw "Please enter valid text";
                }
                if (text.length == 0){
                    throw "please enter a valid string";
                }
            
                text = text.toLowerCase().replace(/[^a-z0-9]/gi, "");
                const reversed = text.split("").reverse().join("");
            
                return text == reversed;
            }
        }
        
        const staticForm = document.getElementById("static-form");

        if (staticForm){
            const palindromeText = document.getElementById("text-to-test");
            const errorContainer = document.getElementById("error-container");
            const errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];
    
            const list = document.getElementById("attempts");
    
            staticForm.addEventListener("submit", event => {
                event.preventDefault();
                errorContainer.classList.add("hidden");
    
                try {
                    const palindromeTextValue = palindromeText.value;
    
                    const result = palindromeMethods.checkForPalindrome(palindromeTextValue);
                    if (result) {
                        var entry = document.createElement("li");
                        entry.appendChild(document.createTextNode(palindromeTextValue));
                        entry.classList.add("is-palindrome");
                        list.appendChild(entry);
                    }
                    else {
                        var entry = document.createElement("li");
                        entry.appendChild(document.createTextNode(palindromeTextValue));
                        entry.classList.add("not-palindrome");
                        list.appendChild(entry);
                    }
                }
                catch (e) {
                    errorTextElement.textContent = e;
                    errorContainer.classList.remove("hidden");
                }
                staticForm.reset();
            });
        }
    }
)();