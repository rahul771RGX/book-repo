import Contact from "../model/contact.model.js";

export const createContact = async(req, res) => {
    try {
        const { name, email, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }
        const contact = new Contact({ name, email, message });
        await contact.save();
        res.status(201).json({ message: "Contact form submitted successfully." });
    } catch (error) {
        res.status(500).json({ error: "Server error." });
    }
};