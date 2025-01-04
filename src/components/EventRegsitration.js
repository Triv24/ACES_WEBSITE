import React, { useState } from 'react';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        year: '',
        mobile: '',
        receipt: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, receipt: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        // You can replace this with your API endpoint or form submission logic
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2>Register for ACES Membership</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', width: '100%' }}
                    >
                        <option value="">Select Department</option>
                        <option value="Comp">Computer</option>
                        <option value="IT">IT</option>
                        <option value="AIDS">AIDS</option>
                        <option value="Mechanical">Mechanical</option>
                        <option value="E&TC">E&TC</option>
                        <option value="Electrical">Electrical</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="year">Year:</label>
                    <select
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', width: '100%' }}
                    >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="mobile">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        required
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="receipt">Upload Receipt:</label>
                    <input
                        type="file"
                        id="receipt"
                        name="receipt"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                        style={{ display: 'block', width: '100%' }}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
};

export default RegisterForm;
