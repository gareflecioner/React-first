
 export  const MyButton=({children, ...props}) => {
  return (
    <>
      <button {...props} type='button' className="btn btn-outline-danger">{children}</button>
     
    </>
  );
}

export default MyButton;