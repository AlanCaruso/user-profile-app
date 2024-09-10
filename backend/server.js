const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = {
    name: '',
    avatar: null
};

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/api/data', (req, res) => {
    res.json(data);
});

app.post('/api/name', (req, res) => {
    data.name = req.body.name;
    res.json({ success: true });
});

app.post('/api/upload-avatar', upload.single('avatar'), (req, res) => {
    const avatar = req.file;
    if (avatar) {
        data.avatar = {
            data: avatar.buffer.toString('base64'),
            contentType: avatar.mimetype
        };
        res.json({ success: true, avatar: data.avatar });
    } else {
        res.status(400).json({ success: false, message: 'No file uploaded.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
