                                            //Chapter 38 to 42 task 1

// function powercalculator(b,a) {
//     document.write (Math.pow(b , a));
// }

// powercalculator(2,3);

                                            //Chapter 38 to 42 task 2

// function leapyear(year) {
    
//      if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0){

//         alert ("leap year");
         
//      } else {
     
//          alert ("Not leapyear");
     
//      }

// }

// leapyear(2014);

                                            //Chapter 38 to 42 task 3
// function sides(a, b, c) {
//     var cal = a + b + c / 2;
//     return cal
// }
// function area(a, b, c) {
//     var s = sides(a, b, c);
//     var cal2 = s*(s - a)*(s - b)*(s - c);
//     return cal2
// }
// document.write (area(3,3,3));

                                            //Chapter 38 to 42 task 4
                    
// function recmakrs() {
//     var arr = [65, 76, 98];
//     var total = 0;
//     for (let i = 0; i < arr.length; i++) {
//          total += arr[i];  
//     }
//     return total
// }

// function percent() {
//     return (recmakrs() / 300) * 100;
// }
                                            
//   document.write (percent()); 

                                            //Chapter 38 to 42 task 5

// var str = "hello";
// var temp = "";

// function positionof(a) {
//     for (let i = 0; i < str.length; i++) {
//         temp = str[i];
//         if (temp === a) {
//             document.write (i);
//             break;
//         }
        
//     }
// }
// positionof("o");

                                            //Chapter 38 to 42 task 6

// function delVowels(sentance) {
//     var removeVovels = '';


//     for (let i = 0; i < sentance.length; i++) {
//         if (sentance[i] != 'A' && sentance[i] != 'E' && sentance[i] != 'I' && sentance[i] != 'O' && sentance[i] != 'U' && sentance[i] != 'a' && sentance[i] != 'e' && sentance[i] != 'i' && sentance[i] != 'o' && sentance[i] != 'u') {
//             removeVovels += sentance[i]


//         }
//     }
//     document.write(removeVovels);
// }


// delVowels('Write a function to delete all vowels from a sentence');

                                            //Chapter 38 to 42 task 7

// function find() {
//     var sentance = "Pleases read this application and give me gratuity";
//     var characters = sentance.toLowerCase();
//     var count = 0;


//     for (let i = 0; i < characters.length; i++) {
//         var firstChar = characters[i];
//         var secondChar = characters[i + 1];


//         if (vowelsCheck(firstChar) && vowelsCheck(secondChar)) {
//             count++
//             document.write(firstChar + secondChar + ' ')
//         }
//     }
//     document.write('<br> Count: ' + count)
//     return count;
// }

// function vowelsCheck(firstChar) {
//     switch (firstChar) {
//         case 'a':
//             return true;
//         case 'e':
//             return true;
//         case 'i':
//             return true;
//         case 'o':
//             return true;
//         case 'u':
//             return true;
//         default:
//             return false;
//     }
// }

// find();

                                            //Chapter 38 to 42 task 8

// var dis = prompt('Enter distance between two cities');


// function meters() {
//     return parseInt(dis) * 1000;
// }


// function feet() {
//     return parseInt(dis) * 3280.8;
// }


// function inches() {
//     return parseInt(dis) * 39370;
// }


// function centimeters() {
//     return parseInt(dis) * 100000;
// }


// document.write('Meters: ' + meters() + ' m');
// document.write('<br> Foot: ' + feet() + ' ft');
// document.write('<br> Inches: ' + inches() + ' in');
// document.write('<br> Centimeters: ' + centimeters() + ' cm');

                                            //Chapter 38 to 42 task 9

// var time= prompt("Enter Time of Employee Worked in hours")
// var overTime, overTimePay = 0;


// if (time > 40) {
//     overTime = time - 40;
//     overTimePay = overTimePay + (12 * overTime);
// }


// document.write('Total over timE ' + overTimePay);

                                            //Chapter 38 to 42 task 10

// var withdrawer = prompt('Enter Amount')


// var hundred = parseInt(withdrawer) / 100;
// var fifty = (parseInt(withdrawer) % 100) / 50;
// var tens = ((parseInt(withdrawer) % 100) % 50) / 10;


// document.write(parseInt(hundred) + ' hundred notes ' + parseInt(fifty) + ' fifty notes ' + parseInt(tens) + ' tens notes');


                                            //Chapter 43 to 48 task 1

// function popup() {
//     alert('Hi,This is javascript assignment by mian Faraz Ahmed...')
// }

                                            //Chapter 43 to 48 task 2

// function popup() {
//     alert('Thank you for clicking here...')
// }

                                            //Chapter 43 to 48 task 3

// function delet(button) {
//     var row = button.parentNode.parentNode;
//     row.parentNode.removeChild(row);
// }


                                            //Chapter 43 to 48 task 4

// function Change() {
//     document.getElementsByTagName('img')[0].src = '02.jpg';
// }


// function ReChange() {
//     document.getElementsByTagName('img')[0].src = '03.jpg';
// }


                                            //Chapter 43 to 48 task 5



// var a = 0;
// function increase() {
//     a++;
//     document.getElementsByTagName('label')[0].innerText = a;
// }
// function decrease() {
//     a--;
//     document.getElementsByTagName('label')[0].innerText = a;
// }

                                            //Chapter 49 to 52 task 1

// function Data() {
//     var name = document.getElementsByTagName('input')[0].value
//     var email = document.getElementsByTagName('input')[1].value


//     document.write('Name: ' + name + '<br>');
//     document.write('EMail: ' + email)
// }
                                            
                                            //Chapter 49 to 52 task 2


// function readMore() {
//     var sentance = 'The semiconductor material is given special properties by a chemical process called doping. The doping results in a material that either adds extra electrons to the material (which is then called N-type for the extra negative charge carriers) or creates "holes" in the material's crystal structure (which is then called P-type because it results in more positive charge carriers). The transistor's three-layer structure contains an N-type semiconductor layer sandwiched between P-type layers (a PNP configuration) or a P-type layer between N-type layers (an NPN configuration).'
//     document.getElementsByTagName('a')[0].innerHTML = '';
//     document.getElementsByTagName('p')[0].innerText += sentance;
// }
                                            //Chapter 49 to 52 task 3




// function showData() {
//     var id = document.getElementsByTagName('input')[0].value
//     var name = document.getElementsByTagName('input')[1].value


//     var table = document.createElement('table')
//     var tableRow = document.createElement('tr')
//     var tableDivision1 = document.createElement('td')
//     var tableDivision2 = document.createElement('td')
//     var editButton = document.createElement('button')
//     var deleteButton = document.createElement('button')


//     var idText = document.createTextNode(id)
//     var nameText = document.createTextNode(name)


//     document.body.appendChild(table)
//     document.getElementsByTagName('table')[0].appendChild(tableRow)


//     tableDivision1.appendChild(idText)
//     tableDivision2.appendChild(nameText)


//     var row = table.insertRow(0);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);


//     cell1.appendChild(tableDivision1)
//     cell2.appendChild(tableDivision2)
//     cell3.appendChild(editButton)
//     cell4.appendChild(deleteButton)


//     table.setAttribute('border', '1px')
//     deleteButton.setAttribute('onClick', 'deleteRow(this)')
//     editButton.setAttribute('onClick', 'editRow()')
//     editButton.setAttribute('id', 'edit')
//     deleteButton.setAttribute('id', 'delete')
//     document.getElementById('edit').innerText = 'Edit'
//     document.getElementById('delete').innerText = 'Delete'
// }


// function deleteRow(button) {
//     var row = button.parentNode.parentNode
//     row.parentNode.removeChild(row)
// }


// function editRow() {
//     document.getElementsByTagName('form')[1].style.display = 'block'


//     var td1 = document.getElementsByTagName('td')[1].innerText
//     var td2 = document.getElementsByTagName('td')[3].innerText


//     document.getElementsByTagName('input')[3].value = td1
//     document.getElementsByTagName('input')[4].value = td2


// }


// function editRow1() {
//     var id = document.getElementsByTagName('input')[3].value
//     var name = document.getElementsByTagName('input')[4].value


//     document.getElementsByTagName('td')[1].innerText = id
//     document.getElementsByTagName('td')[3].innerText = name


//     document.getElementsByTagName('form')[1].style.display = 'none'
// }

                                        //Chapter 58 to 67 task 1

// var Content = document.getElementById('main-content').childNodes
// for (i = 0; i < Content.length; i++) {
//     document.write(Content[i].nodeName + "<br>")
// }
                                        
                                    
// var renderClass = document.getElementsByClassName('render')
// for (let i = 0; i < renderClass.length; i++) {
//     document.write(renderClass[i].innerHTML)
// }
                                        
                                    
// document.getElementById('frst-name').value = "ABCD"
// document.getElementById('last-name').value = "XYZ"
// document.getElementById('email').value = "ABCD@XYZ.COM"
                                        
                                    
                                        //Chapter 58 to 67 task 2
// var nodeType = document.getElementById('main-content')
// document.write(nodeType.nodeType)
                                        
                                    
// var nodeType1 = document.getElementById('last-name')
// document.write(nodeType1.nodeType)
                                        
                                    
// var nodeType2 = document.getElementById('last-name').childNodes
// document.write(nodeType2.nodeType)
                                        
                                    
// var a = document.getElementById('last-name').childNodes
// document.write(a.textContent = "AAA")
                                        
                                    
// var getChild = document.getElementById('main-content')
// document.write(getChild.firstChild.nodeName)
// document.write(getChild.lastChild.nodeName)
                                        
                                    
// var getSibling = document.getElementById('lastName')
// document.write(getSibling.nextSibling.nodeName)
// document.write(getSibling.previousSibling.nodeName)
                                        
                                    
// var getParentNodeAndNodeType = document.getElementById('email')
// document.write(getParentNodeAndNodeType.parentNode.nodeName)
// document.write(getParentNodeAndNodeType.nodeType)