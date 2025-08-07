


export default function Tabs({children,buttons,BtnContainer='menu'}){
//const BtnContainer = btnContainer;
return (
    <>
    <BtnContainer>
{buttons}
    </BtnContainer>
    {children}
    </>
)



}