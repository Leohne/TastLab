function Step_recipe() {
    const renderImage = (imgSrc?: string) => {
        return imgSrc ? <img src={imgSrc} alt="step_img" /> : '';
      };
    return (
        <>
        <h3></h3>
        <div>
            {renderImage}
        </div>
        <div>
            <div>

            </div>
            <div>
                
            </div>
        </div>
        </>
    )
}

export default Step_recipe