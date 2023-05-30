import { useEffect } from "react";

const Modal = ({setModalOpen, contract}) =>{
    const sharing = async()=>{
        const address = document.querySelector(".address").value;
        await contract.allow(address);
    }

    useEffect(()=>{
        const accessList = async() => {
            const addressList = await contract.shareAccess();
            let select = document.querySelector("#selectNumber");
            const options = addressList;

            for(let i = 0; i<options.length; i++){
                let opt = options[i];
                let e1 = document.createElement("option");
                e1.textContent = opt;
                e1.value = opt;
                select.appendChild(e1);
            }
        }
        contract && accessList();
    }, []);

    return (
        <div class="container mt-5 p-5 bg-dark border rounded">
            <div>
                <div className="text-light">Share with</div>
                <div className="body">
                <input type="text" className="address form-control mt-2" placeholder="Enter Address"></input>
                </div>
                <form id="myForm">
                    <select id="selectNumber" className="form-select mt-5" aria-label="Default select example">
                        <option className="address">People with Access</option>
                    </select>
                </form>
                <div className="footer">
                    <button className="mx-5 mt-5 btn btn-warning" onClick={()=>{setModalOpen(false)}} id="cancelBtn">Cancel</button>
                    <button className="mx-5 mt-5 btn btn-secondary" onClick={()=>{sharing()}}>Share</button>
                </div>
            </div>
        </div>
    );
}

export default Modal