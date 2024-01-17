const model = {
    setInput: '',
    setInput2: '',
    setemail:'',
    setphone:'',
    setOutput:''
}


const view = {
    setInput: () => document.getElementById('textInput').value,
    setInput2: () => document.getElementById('textInput2').value,
    setemail: () => document.getElementById('emailinput').value,
    setphone: () => document.getElementById('phoneinput').value,
    setOutput: (output) => {
        const outputElement = document.getElementById('output');
        outputElement.textContent = output;
    }
    
}

const controller = {
  start: function() {
    const submitButton = document.getElementById('submitButton');
    submitButton.addEventListener('click', this.handleSubmit);
  },
  handleSubmit: function() {
      model.inputData = view.setInput();
      model.inputData2 = view.setInput2();
      model.setemail = view.setemail();
      model.setphone = view.setphone();
      model.outputData = "Welcome " + model.inputData + " " + model.inputData2.toUpperCase() + " !" +
      "      Here Check Your Contact Details Phone: " + model.setphone + "  Email: " + model.setemail;

      

    view.setOutput(model.outputData);
  }
};


controller.start();
