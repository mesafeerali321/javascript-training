let student_data = {
    student_name: 'Zafri',
    roll: 20,
    is_monitor: true,
    class: '12th',
    student_subject: 'Science',
    college_name: 'Nalanda College',
    discipline_type: 'Good'
}
console.log(student_data)
student_data.student_name="Md Zafri"
console.log(student_data)
student_data.class="11th"
console.log(student_data)
if(student_data.is_monitor == true){
    student_data.discipline_type= "Excelent"
}
console.log(student_data)
