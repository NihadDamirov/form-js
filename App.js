document.getElementById('duplicateForm').addEventListener('click', function() {
    var companyPartners = document.querySelector('.company-partners');
    var clone = companyPartners.cloneNode(true);
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove Form';
    deleteButton.addEventListener('click', function() {
      clone.remove();
    });
    companyPartners.parentNode.appendChild(clone);
  });

  document.getElementById('removeForm').addEventListener('click', function() {
    var companyPartners = document.querySelectorAll('.company-capital .company-partners');
    if (companyPartners.length > 1) {
      companyPartners[companyPartners.length - 1].remove();
    }
  });

  document.querySelector('.duplicateStockholder').addEventListener('click', function() {
    const forms = document.querySelectorAll('.stockholder-info');
    const lastForm = forms[forms.length - 1];
    const clone = lastForm.cloneNode(true);
    document.querySelector('.stockholder-forms').appendChild(clone);
  });

  document.querySelector('.removeStockholder').addEventListener('click', function() {
    const forms = document.querySelectorAll('.stockholder-info');
    if (forms.length > 1) {
      const lastForm = forms[forms.length - 1];
      lastForm.remove();
    }
  });

  
  const checkbox = document.getElementById('samePersonCheckbox');
  const directorInfo = document.getElementById('directorInfo');

  checkbox.addEventListener('change', function() {
    directorInfo.style.display = this.checked ? 'none' : 'flex';
  });


  let inputs = [{ type: "user1", value: "" }];

      function renderInputs() {
        const container = document.getElementById("inputsContainer");
        container.innerHTML = "";
        inputs.forEach((input, index) => {
          const div = document.createElement("div");
          div.className = "company-capital-inside";

          const select = document.createElement("select");
          select.className = "select-section";
          select.value = input.type;
          select.addEventListener("change", (e) =>
            handleSelectChange(e.target.value, index)
          );
          ["user1", "user2", "user3"].forEach((optionValue) => {
            const option = document.createElement("option");
            option.value = optionValue;
            option.text = optionValue;
            select.appendChild(option);
          });

          const numberInput = document.createElement("input");
          numberInput.type = "number";
          numberInput.className = "amount-input";
          numberInput.value = input.value;
          numberInput.addEventListener("input", (e) =>
            handleChange(e.target.value, index)
          );

          const button = document.createElement("button");
          button.textContent = "Direktor";
          button.className = "test-btn";

          const removeButton = document.createElement("button");
          removeButton.textContent = "Sil";
          removeButton.className = "remove-btn";
          removeButton.addEventListener("click", () =>
            handleRemoveInput(index)
          );

          div.appendChild(select);
          div.appendChild(numberInput);
          div.appendChild(button);
          if (index >= 1) {
            div.appendChild(removeButton);
          }

          container.appendChild(div);
        });
      }

      function addInput() {
        inputs.push({ type: "user1", value: "" });
        renderInputs();
      }

      function handleSelectChange(value, index) {
        inputs[index].type = value;
      }

      function handleChange(value, index) {
        inputs[index].value = value;
      }

      function handleRemoveInput(index) {
        inputs.splice(index, 1);
        renderInputs();
      }

      renderInputs();

