import React, { useState } from 'react';

const FormComponent = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        regNo: "",
        category: 0 ,
        branch :"", 
    });
    const [loading, setloading] = useState(false)
    const updateForm = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    const handleSubmit = async (e) => {

        e.preventDefault();

        setloading(true);

        if (!formData.name || formData.category === 0 || !formData.regNo) {

            alert("All fields are required");

            setloading(false);

            return;

        }

        const formDataa = new FormData();

        formDataa.append('name', formData.name);

        formDataa.append('regNo', formData.regNo);

        formDataa.append('category', formData.category);
        formDataa.append('branch', formData.branch);




        fetch("https://script.google.com/macros/s/AKfycbzOMXHDRABrvLTEAEVajWjhD4Vw9geEW-kScp3WD8s-vmdaUbDbZhNkvYd7LM7fC5B-/exec", {

            method: "POST",

            body: formDataa

        })

            .then((data) => {

                console.log(data);

                if (data.status === 200) {

                    alert(`${formData.name} successfully registered for ${formData.category}`);

                    setFormData({ name: '', category: 0, regNo: '' , branch:''});

                    onClose();

                } else {

                    alert("Something went wrong! Please try again");

                }

                setloading(false);

            })

            .catch((error) => {

                console.log(error);

                alert(error?.message || "Something went wrong. Please Try again");

                setloading(false);

            });
    };



    const events = [
        "100m (B)", "100m (G)", "200m (B)", "200m (G)", "400m (B)", "400m (G)", "800m (B)", "800m (G)",
        "1500m (B)", "1500m (G)", "3000m (B)", "Cross country",
        "Discus (B)", "Discus (G)", "Javelin (B)", "Javelin (G)",
        "Shotput (B)", "Shotput (G)", "Long jump (B)", "Long jump (G)",
        "High jump (B)", "Triple jump (B)", "Triple jump (G)",
        "Hammer throw", "Tug of War",
        "4*100m (B)", "4*100m (G)", "4*400m (B)", "4*100m Mix", "Medley"
    ];
    const branchs = [
        "CSE",
        "ECE",
        "EE",
        "ECM",
        "ME",
        "PIE",
        "CE",
        "MME"
    ];

    return (
        <div className="flex items-center justify-center mt-28">
            <form className="backdrop-blur-lg bg-white/10 p-8 rounded-md shadow-lg w-96 border border-white/20" onSubmit={handleSubmit}>
                <h2 className="text-2xl text-white font-semibold mb-6 text-center">
                    Athletics Registration Form
                </h2>
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        value={formData.name}
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="regNo">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        id="regNo"
                        name='regNo'
                        value={formData.regNo}
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter registration number"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category" 
                        value={formData.category}
                        name='category'
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="0" className='text-black'>Select a category</option>
                      
                        {events.map(event => <option value={event} key={event} className='text-black'>{event}</option>)}
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="category">
                        Branch
                    </label>
                    <select
                        id="branch" 
                        value={formData.branch}
                        name='branch'
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="0" className='text-black'>Select a Branch</option>
                      
                        {branchs.map(event => <option value={event} key={event} className='text-black'>{event}</option>)}
                    </select>
                </div>  

                {!loading && <button
                    type="submit"
                    className="w-full py-2 bg-[#F5DEB3] text-black font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>}
                {/* close Button */}
                <button
                onClick={onClose}
                    type="submit"
                    className="mt-6 w-full py-2 bg-white text-black font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    close
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
