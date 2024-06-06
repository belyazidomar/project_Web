import React, { useState } from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'


function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        birthdate: '',
        gender: '',
        age: '',
        education: '',
        experience: '',
        projects: '',
        securityNetworkSkills: [],
        otherSkills: '',
        photo: null,
    });
    const [showOtherSkills, setShowOtherSkills] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setFormData((prevData) => ({
                ...prevData,
                securityNetworkSkills: checked
                    ? [...prevData.securityNetworkSkills, value]
                    : prevData.securityNetworkSkills.filter((skill) => skill !== value),
            }));
        } else if (type === 'file') {
            setFormData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let errorMsg = '';
        if (name === 'name' && value.trim() === '') {
            errorMsg = 'Le nom est requis.';
        }
        if (name === 'photo' && !value) {
            errorMsg = 'La photo est requise.';
        }
        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            errorMsg = 'Adresse email invalide.';
        }
        if (name === 'phone' && !/^\+212\d{9}$/.test(value)) {
            errorMsg = 'Numéro de téléphone invalide.';
        }
        if (name === 'age' && (isNaN(value) || parseInt(value) < 18)) {
            errorMsg = 'L\'âge doit être supérieur ou égal à 18.';
        }
        if ((name === 'education' || name === 'experience') && value.trim() === '') {
            errorMsg = `Le champ ${name === 'education' ? 'Formation' : 'Expérience Professionnelle'} est requis.`;
        }
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMsg,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const age = parseInt(formData.age);
        if (isNaN(age) || age < 3) {
            alert("L'âge sélectionné est inférieur à 3.");
            return;
        }

        const birthDate = new Date(formData.birthdate);
        const today = new Date();
        const calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            calculatedAge--;
        }

        if (calculatedAge < 18) {
            alert("Vous devez avoir au moins 18 ans.");
            return;
        }

        if (!formData.education.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                education: 'Le champ Formation est requis.',
            }));
            return;
        }

        if (!formData.experience.trim()) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                experience: 'Le champ Expérience Professionnelle est requis.',
            }));
            return;
        }

        console.log('Form data submitted:', formData);
    };

    const toggleOtherSkills = () => {
        setShowOtherSkills(!showOtherSkills);
    };

    return (
        <>
        <Header />
        <div className="container">
            <h1>Formulaire de CV</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nom:*</label>
                    <textarea
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                    {errors.name && <small className="error">{errors.name}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Adresse Email:*</label>
                    <textarea
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                    {errors.email && <small className="error">{errors.email}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numéro de Téléphone:*</label>
                    <textarea
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="^\+212\d{8}$"
                        value={formData.phone}
                        onChange={handleChange}
                        className={errors.phone ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                    {errors.phone && <small className="error">{errors.phone}</small>}
                </div>
                <div className="form-group">
                    <label htmlFor="age">Select your age:*</label>
                    <select
                        name="age"
                        id="age"
                        value={formData.age}
                        onChange={handleChange}
                        className={errors.age ? 'invalid' : 'valid'}
                        required
                    >
                        <option value="placeholder" disabled>Click to select</option>
                        {[...Array(100).keys()].map((age) => (
                            <option key={age} value={age}>{age}</option>
                        ))}
                    </select>
                    {errors.age && <small className="error">{errors.age}</small>}
                </div>
                <div className="form-group">
                    <label>Sexe:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="homme"
                                checked={formData.gender === 'homme'}
                                onChange={handleChange}
                                required
                            /> Homme
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="femme"
                                checked={formData.gender === 'femme'}
                                onChange={handleChange}
                            /> Femme
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Formation:*</label>
                    <textarea
                        id="education"
                        name="education"
                        rows="5"
                        value={formData.education}
                        onChange={handleChange}
                        className={errors.education ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                    {errors.education && <small className="error">{errors.education}</small>}
                </div>
                <div className="form-group">
                    <label>Expérience Professionnelle:*</label>
                    <textarea
                        id="experience"
                        name="experience"
                        rows="5"
                        value={formData.experience}
                        onChange={handleChange}
                        className={errors.experience ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                    {errors.experience && <small className="error">{errors.experience}</small>}
                </div>
                <div className="form-group">
                    <label>Projets Réalisés:(optional)</label>
                    <textarea
                        id="projects"
                        name="projects"
                        rows="5"
                        value={formData.projects}
                        onChange={handleChange}
                        className={errors.projects ? 'invalid' : 'valid'}
                        required
                    ></textarea>
                </div>
                <div className="form-group">
                    <label>Compétences en Sécurité et Réseau:</label>
                    <div className="checkbox-group">
                        <h6>Firewall</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="vpn"
                                onChange={handleChange}
                            /> 
                            <span class="slider"></span>

                        </label>
                        <h6>IDS/IPS</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="ids_ips"
                                onChange={handleChange}
                            /> <span class="slider"></span>
                        </label>
                        <h6>Chiffrement</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="encryption"
                                onChange={handleChange}
                            /> <span class="slider"></span>
                        </label>
                        <h6>Politiques de Sécurité</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="security_policies"
                                onChange={handleChange}
                            /> <span class="slider"></span>
                        </label>
                        <h6>Sécurité Sans Fil</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="wireless_security"
                                onChange={handleChange}
                            /> <span class="slider"></span>
                        </label>
                        <h6>Réponse aux Incidents</h6>
                        <label class="toggle">
                            <input
                                type="checkbox"
                                name="security_network_skills"
                                value="incident_response"
                                onChange={handleChange}
                            /> <span class="slider"></span>
                        </label>
                        <label class="toggle">
                            <button type="button" onClick={toggleOtherSkills}>Autre</button>
                        </label>
                    </div>
                </div>
                {showOtherSkills && (
                    <div className="form-group">
                        <label>Autres Compétences:</label>
                        <textarea
                            id="otherSkills"
                            name="otherSkills"
                            rows="3"
                            value={formData.otherSkills}
                            onChange={handleChange}
                            className={errors.otherSkills ? 'invalid' : 'valid'}
                        ></textarea>
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="photo">Photo:*</label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        onChange={handleChange}
                        className={errors.photo ? 'invalid' : 'valid'}
                        required
                    />
                    {errors.photo && <small className="error">{errors.photo}</small>}
                </div>
                <button type="submit">Soumettre le CV</button>
            </form>
        </div>
        <Footer />
        </>
    );
}

export default Form;
