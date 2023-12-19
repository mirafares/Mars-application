const slidePg = document.querySelector(".slidepg");
const  FirNxtBtn = document.querySelector(".nextbutton");
const  SecNxtBtn = document.querySelector(".next");
const  SecPrvBtn = document.querySelector(".prev");
const  ThrdPrvBtn = document.querySelector(".prev1");
const  SubmitBtn = document.querySelector(".submit");
const  FirProgress = document.querySelectorAll(".step p");
const  SecProgress = document.querySelectorAll(".step .check");
const  bullet = document.querySelectorAll(".step .bullet");
const healthDeclarationSelect = document.querySelector('#healthDeclaration');

let curr = 1;

healthDeclarationSelect.addEventListener('change', function () {
    const selectedOption = this.value;
    
    if (selectedOption === 'No') {
        alert('Alert: You selected "No" for health declaration. You can not proceed with the application');
        location.reload();
    }
});

function showPage(pageIndex) {
    slidePg.style.marginLeft = `-${(pageIndex - 1) * 25}%`;
}

function validateAndMove(nextPageIndex) {
    const currentPageInputs = document.querySelectorAll(`.page:nth-child(${curr}) input[required]`);
    let isValid = true;

    currentPageInputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            input.reportValidity();
        }
    });

    if (isValid) {
        bullet[curr - 1].classList.add("active");
        FirProgress[curr - 1].classList.add("active");
        SecProgress[curr - 1].classList.add("active");
        curr = nextPageIndex;
        showPage(curr);
    }
}
function handleSubmit(event) {
    event.preventDefault();
    validateAndMove(curr + 1);

    if (curr > 3) {
        setTimeout(function () {
            alert("Your Form has been submitted! Start Packing!");
            location.reload();
        }, 800);
    }
}

FirNxtBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateAndMove(2);
});

SecNxtBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateAndMove(3);
});

SubmitBtn.addEventListener("click", handleSubmit);

SecPrvBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showPage(curr - 1);
    curr -= 1;
});

ThrdPrvBtn.addEventListener("click", function (event) {
    event.preventDefault();
    showPage(curr - 1);
    curr -= 1;
});
