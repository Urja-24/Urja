import React, { useState } from 'react';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        name: "",
        regNo: "",
        category: 0  // Key must be lowercase 'category' to match the id in select
    });

    const updateForm = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!formData.name || formData.category === '0' || !formData.regNo) {
    //         alert("All fields are required");
    //         return;
    //     }
    //     try {
    //         const response = await fetch('https://script.google.com/macros/s/AKfycbwS99RGRfq5p8SAYoiiGLVJN2sgjQrmoK2bgF-K3hTOOMD-8ePHD33YH1BJzmfl90zH/exec', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(formData)
    //         });

    //         if (response.ok) {
    //             alert(formData.name + " has been successfully registered for " + formData.category);
    //             // Optionally, reset the form after successful submission
    //             setFormData({ name: "", regNo: "", category: 0 });
    //         } else {
    //             alert("Failed to submit the form.");
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("An error occurred.");
    //     }
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || formData.category == '0' || !formData.regNo) {
            alert("All fields are required");
            return;
        }
        try {
            alert(`${formData.name} successfully registered for ${formData.category}`);
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred.");
        }
    };



    const events = [
        "100m (G)", "200m (B)", "200m (G)", "400m (B)", "400m (G)", "800m (B)", "800m (G)",
        "1500m (B)", "1500m (G)", "3000m (B)", "Cross country",
        "Discus (B)", "Discus (G)", "Javelin (B)", "Javelin (G)",
        "Shotput (B)", "Shotput (G)", "Long jump (B)", "Long jump (G)",
        "High jump (B)", "High jump (G)", "Triple jump (B)", "Triple jump (G)",
        "Hammer throw", "Tug of War",
        "4*100m (B)", "4*100m (G)", "4*400m (B)", "4*100m Mix", "Medley"
    ];

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form className="backdrop-blur-lg bg-white/10 p-8 rounded-md shadow-lg w-96 border border-white/20" onSubmit={handleSubmit}>
                <h2 className="text-2xl text-white font-semibold mb-6 text-center">
                    Athletics Registration Form
                </h2>

                {/* Name Input */}
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Registration Number Input */}
                <div className="mb-4">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="regNo">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        id="regNo"
                        value={formData.regNo}
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter registration number"
                    />
                </div>

                {/* Select Dropdown */}
                <div className="mb-6">
                    <label className="block text-gray-200 text-sm mb-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        id="category" // Ensure this matches the key in formData (lowercase 'category')
                        value={formData.category}
                        onChange={updateForm}
                        className="w-full px-3 py-2 text-gray-200 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option value="0" className='text-black'>Select a category</option>
                        {/* You can add more options here */}
                        {events.map(event => <option value={event} key={event} className='text-black'>{event}</option>)}
                    </select>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
