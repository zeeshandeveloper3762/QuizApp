const question = [
    {
        que: "ہمارے نبیﷺ کا کیا نام تھا ",
        a: "محمد ﷺ",
        b: "آدم",
        c: "نوح",
        d: "هود",
    },

    {
        que: "which the markup language",
        a: "HTML",
        b: "CSS",
        C: "JAVASCRIPT",
        d: "PHP",
    },
    {
        que: "CSS stand for : ",
        a: "case cading style sheet",
        b: "eligendi quisquam in, quo non.",
        C: "exercitationem nesciunt magnam voluptatum",
        d: "nesciunt magnam voluptatum",
    },
];

const index = 2;
const quesbox = document.getElementById("quesbox");
const inputs = document.getElementsByClassName("inputs");



const loadQuestion = () => {
    const data = question[index];
    // console.log(data)
    quesbox.innerText = `${index + 1}) ${data.que}`
    inputs[0].nextElementSibling.innerText = data.a
    inputs[1].nextElementSibling.innerText = data.b
    inputs[2].nextElementSibling.innerText = data.c
    inputs[3].nextElementSibling.innerText = data.d
};

loadQuestion();

const getAns = () => {
    inputs.forEach((input)=>_{
        if(input.cheke)
    });
}
const submitQuez = () => {

};





