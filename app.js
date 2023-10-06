var a = 10;

document.write("<h2>Results:</h2><br>");

document.write("The Value of a is:"+a +"<br>");
document.write("--------------------------<br><br>");

document.write("The Value of ++a is:"+ ++a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The Value of a++ is:"+ a++ +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The Value of --a is:"+ --a +"<br>");
document.write("Now the value of a is: "+a+"<br><br>");

document.write("The Value of a is:"+ a-- +"<br>");
document.write("Now the value of a is: "+a+"<br><br><br><br><br>");

var userName = prompt("What is your name?");
alert("WELCOME "+ userName +"!")

var userInput = prompt("Enter a number:");
        var number = parseInt(userInput) || 5; // Default to 5 if no input or invalid input

        // Generate and display the multiplication table
        document.write("<h2>Multiplication Table:</h2>");
        document.write("<p>Multiplication table for " + number + ":</p>");
        for (var i = 1; i <= 10; i++) {
            document.write(number + " x " + i + " = " + (number * i) + "<br>");
        }
     



        document.write("<br><br><br><br>");


        // Mark sheet

        var subject1 = prompt("please write down First Subject:");
        var subject2 = prompt("please write down Second Subject:");
        var subject3 = prompt("please write down Third Subject:");

        var obtainedMarks1 = +prompt("Your marks in " + subject1 + " ?")
        var obtainedMarks2 = +prompt("Your marks in " + subject2 + " ?")
        var obtainedMarks3 = +prompt("Your marks in " + subject3 + " ?")
        var totalMarks = 100;
        var totalObtainedMarks = obtainedMarks1+obtainedMarks2+obtainedMarks3;

        document.write("<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Marks Obtained</th> <th>Percentage</th> </tr> <tr><td>"+subject1+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks1+"</td><td>"+((obtainedMarks1/totalMarks)*100) +" % </td></tr>");
        
        document.write("<tr><td>"+subject2+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks2+"</td><td>"+((obtainedMarks2/totalMarks)*100) +" % </td></tr>");
        
        document.write("<tr><td>"+subject3+"</td><td>"+totalMarks+"</td><td>"+obtainedMarks3+"</td><td>"+((obtainedMarks3/totalMarks)*100) +" % </td></tr>");

        document.write("<tr><td>"+" "+"</td><td>"+ totalMarks*3 +"</td><td>"+ totalObtainedMarks +"</td><td>"+((totalObtainedMarks)/(totalMarks*3))*100 +" % </td></tr>");