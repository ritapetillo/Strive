import React,{useState,useEffect} from 'react'
import { getStudentById} from "../utils";


function ProjectTableStudent({ id }) {
     const [student, setStudent] = useState(false);

     useEffect(() => {
       getStudent();
     }, []);

     const getStudent = async () => {
       const student = await getStudentById(id);
       setStudent(student);
     };



    return (
      <td>
        {student.name} {student.surname}
      </td>
    );
}

export default ProjectTableStudent
