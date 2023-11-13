let student_data = {
    student_name: 'Labib',
    roll: 32,
    class: '11th',
    college_name: 'Nalanda College',
    subject: 'Science',
    is_monitor: true,
    discipline_type: 'Good'
}
console.log(student_data)
student_data.student_name= 'Labib Neyazi'
console.log(student_data)
student_data.class= '12th'
console.log(student_data)
student_data.roll= 20
console.log(student_data)
student_data.subject= 'Arts'
console.log(student_data)
if(student_data.is_monitor == true){
    student_data.discipline_type = 'Excelent'
}
console.log(student_data)