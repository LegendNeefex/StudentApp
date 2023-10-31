function  MainButton({children, buttonType,buttonClass, isDisabled}) {
    return (
      <button type={buttonType} disabled={isDisabled} className={`btn-disabled ${buttonClass}`}>
      {children}
      </button>
    )
}
  


export default  MainButton; 