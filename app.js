const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];
const input = ['print', 'verify', 'lookup', 'contains', 'update', 'add', 'delete']
var user = [prompt('input command')];

function printList() {
  for (let i = 0; i < employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}

function lookupList(employeeList) {
  var finput = [prompt('employee Name')]
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i] == finput) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    } else {
      alert("Value not found");
    }
  }
};



function addedemp(employeeList) {
  const employeeName = [prompt('Employee First Name')];
  const employeeNum2 = [prompt('Employee Number')];
  const employeePhone = [prompt('Employee Phone Number')];

  var nEmployee = {
    name: employeeName,
    officeNum: employeeNum2,
    phoneNum: employeePhone
  };

  employeeList.push(nEmployee);

  for (let x = 0; x < employeeList.length; x++) {
    render(employeeList[x].name)
    render(employeeList[x].officeNum)
    render(employeeList[x].phoneNum)
  }
};
function contains(employeeList) {
  const cName = prompt('enter a partial name:');
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeList[i].includes(cName));
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
};

function update(employeeList) {
  const Oname = prompt('Employee Name');
  const employeeNum2 = [prompt('Employee Number')];
  const employeePhone = [prompt('Employee Phone Number')];

  const Uname = prompt('Enter in Name Updated')

  for (let i = 0; i < employeeList.length; i++) {
    render(empolyeeList[i]); if (Oname === employeeList[i])


      for (let i = 0; i < employeeList.length; i++); {
      if (Oname === employeeList[i].name) {
        employeeList[i].name = Uname;
        employeeList[i].officeNum = employeeNum2;
        employeeList[i].phoneNume = employeePhone;
      }


      for (let i = 0; i < employeeList.length; i++) {
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  }
}

function verify(employeeList) {
  var finput = [prompt('employee Name')]
  for (i = 0; i < employeeList.length; i++) {
    if (typeof employeeList[i].name === finput) {
      message = 'true'
    } else {
       message = 'false'
    }
    render(message);
  
  }
};
function del (employeeList){
  var Edelete = prompt("Employee Name You Wish to Delete");
  var index = employeeList.indexOf(Edelete);
  if (index>-1) {
    array.splice(index, 1);;
  }
  else{
      alert("id is not in the system");
  }
}














if (user == 'print') {
  printList();
};

if (user == 'lookup') {
  lookupList(employeeList);
};

if (user == 'add') {
  addedemp(employeeList);
};

if (user == 'contain') {
  contains(employeeList);

};
if (user == 'update') {
  update(employeeList);
};

if (user == 'verify'){
  verify(employeeList)
  
};

if (user == 'delete'){
   del(employeeList)
}


