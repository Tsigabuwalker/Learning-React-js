function Students(props){
        //props are js objects 
        return(
            <div className="student">
                
                <p>Name: {props.name}</p>
                   <p>Age: {props.age}</p>
                   <p>Student: {props.isStudent ? "Yes" : "No"} </p>
            </div>
        )

}
export default Students;