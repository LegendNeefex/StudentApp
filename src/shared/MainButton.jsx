function  MainButton({children, buttonType,buttonClass, isDisabled}) {
    return (
      <button type={buttonType} disabled={isDisabled} className={`btn btn-${buttonClass}`}>
      {children}
      </button>
    )
}
  
MainButton.defaultProps ={
  buttonClass:'primary'
}

export default  MainButton; 