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
let userCommand = '';

const print = function() {
    let htmlStr = '';
            for (let i = 0; i < employeeList.length; i++) {
                htmlStr += `<p> ${employeeList[i].name}</p>`;
                htmlStr += `<p> ${employeeList[i].officeNum}</p>`
                htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
                
            } 
            render(htmlStr);
}

const verify = function () {
     let htmlStr = '';
         let userName = $('#name').val();
                for (let i = 0; i < employeeList.length; i++) {
                 if (userName === employeeList[i].name) {
                    console.log(userName);
                     htmlStr += `<p>true</p>`;
                 } else {
                     htmlStr += '';
                 }
             }
             render(htmlStr);
            }


const lookup = function () {
    let htmlStr = '';
            let userName = $('#name').val();
            for (let i = 0; i < employeeList.length; i++) {
                if (userName === employeeList[i].name) {
                    htmlStr += `<p> ${employeeList[i].name}</p>`;
                    htmlStr += `<p> ${employeeList[i].officeNum}</p>`
                    htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
                }
            } render(htmlStr);
            
}

const contains = function () {
    let htmlStr = '';
        let userContains = $('input').val();
           for (let i = 0; i < employeeList.length; i++){
              if (employeeList[i].name.includes(userContains)) {
                    htmlStr += `<p> ${employeeList[i].name}</p>`;
                    htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
                    htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
                }
            } render(htmlStr);
}


// const update = function() {
//     let htmlStr = '';
//         let userCommand = $('input').val();
//            for (var i = 0; i < employeeList.length; i++){
//            if (userName === employeeList[i].name){
//             employeeList[i].name = userValue;
//             }
//             htmlStr += `<p> ${employeeList[i].name}</p>`;
//             htmlStr += `<p> ${employeeList[i].officeNum}</p>`
//             htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
//             }
//              } render(htmlStr);
            

const add = function() {
    let htmlStr = '';
        let addName = $('#name').val();
        let addOffice = $('#office').val();
        let addPhone = $('#phone').val();
          
                    const addToList = {
                    name: addName,
                    officeNum: addOffice,
                    phoneNum: addPhone
                  }
                  employeeList.push(addToList);
                  
                  for (let i = 0; i < employeeList.length; i++) {
                      if (addName === employeeList[i].name) {
                        htmlStr += `<p> ${employeeList[i].name}</p>`;
                        htmlStr += `<p> ${employeeList[i].officeNum}</p>`;
                        htmlStr += `<p> ${employeeList[i].phoneNum}</p>`;
                      }
                    
                  }
                  render(htmlStr);
                }


const deleteName = function() {
    let htmlStr = '';
    let deleteName = $('#name').val();
          for (let i = 0; i < employeeList.length; i++) {
            if (deleteName === employeeList[i].name) {
                delete employeeList[i].name;
                delete employeeList[i].officeNum;
                delete employeeList[i].phoneNum;
                htmlStr += `<p>Employee Deleted</p>`;
                      } 
                      } render(htmlStr);
                    }
          
   

const runCommand = function (e) {
    e.preventDefault();
    switch (userCommand) {
        case 'print':
           print();
              break;
       
        case 'verify':
            verify();
              break;
         
        case 'lookup':
            lookup();
              break;

        case 'contains':
            contains();
              break;
        
        case 'update':
            update();
              break;


        case 'add':
            add();
              break;
            
        case 'delete':
            deleteName();
              break;
            }
        }
        
        

        
const printInput = function () {
    userCommand = 'print';
    $('#name').removeClass('show');
    

}

const verifyInput = function () {
    userCommand = 'verify';
    $('#name').addClass('show');
}

const lookupInput = function () {
    userCommand = 'lookup';
    $('#name').addClass('show');
}

const containsInput = function () {
    userCommand = 'contains';
    $('#name').addClass('show');
}

const updateInput = function () {
    userCommand = 'update';
    $('#name').addClass('show');
    $('#office').addClass('show');
    $('#phone').addClass('show');
}

const addInput = function () {
    userCommand = 'add';
    $('#name').addClass('show');
    $('#office').addClass('show');
    $('#phone').addClass('show');
}

const deleteInput = function () {
    userCommand = 'delete';
    $('#name').addClass('show');
}

const render = function (htmlStr) {
    $('#list').html(htmlStr);

}

$('#printButton').on('click', printInput);
$('#verifyButton').on('click', verifyInput);
$('#lookupButton').on('click', lookupInput);
$('#containsButton').on('click', containsInput);
$('#updateButton').on('click', updateInput);
$('#addButton').on('click', addInput);
$('#deleteButton').on('click', deleteInput);
$('#inputButton').on('click', runCommand);