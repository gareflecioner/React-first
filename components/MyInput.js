
 export  const MyInput=({children, ...props}) => {
    return (
      <>
      <div className="form-group">
    <label for="exampleFormControlInput1">{children}</label>
        <input className="form-control" {...props} />
       </div>
      </>
    );
  }
  
  export default MyInput;