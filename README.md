# flabber 

## Project Description 
The app that transforms travel planning for adventurers. With Flabber, every trip becomes a surprise. Thanks to generative AI, like ChatGPT, Flabber offers tailor-made mystery tours at the touch of a button. Intuitive, fast, and smart – Flabber is the future way to travel.
Flabber fixes everything from flights to hotels and taxis, so you don't have to worry about it!

## Prerequisites
The tools and technologies needed to run your project:
- Node.js and npm (Node Package Manager)
- Python 
- Xcode
- Git (optional for cloning the repository)

## Installation 
## Before you open the files
We are going to open these two project in Visual Studio code. 

1. Start by opening Visual Studio code on your computer. You will need one window for the frontend and one for the backend. (to do that open first one window. To open a new window press file in the top left corner of your screen. -> new window)
```bash
open VScode -> file -> new window
```
3. Open the terminal in Visual Studio code. You will use the seperate terminals in the window for each project.

In the next step we will open the backend in one of the windows you now have open.


## Setting up the React Native frontend

Link to repository: https://github.com/andreagrondal/flabberFerdig 

1. Clone the repository: If using Git, clone the project repository to your local machine.
```bash
git clone [repository link]
```

2. Navigate to the project directory and run:
```bash
cd flabberFerdig
```

In VScode open explorer (the icon that looks like two papers) and open folder. Find the respitory folder in finder local on your computer and press open.

When in the directory: run this command in the terminal
```bash
npm install
```

3. Run the project:
```bash
npx expo start --tunnel
```
4. Download expo Go on your phone and scan the QR code from the terminal with your camera.

5. Now you can navigate through the frontend interface. Next, we need to set up the backend.

## Setting up the python Flask backend
Now you have to go into the other new window we opened before we started on the frontend project.
Open the terminal:

Link to repository: https://github.com/andreagrondal/flaskBackend 

1. Clone the repository: If using Git, clone the project repository to your local machine.
```bash
git clone [repository link]
```
2. Navigate to the backend directory.
```bash
cd flaskBackend
```

3. Do the same as in the step with the frontend. Open the folder and open flaskBackend from finder on your computer.
   
4. Install these commands in the terminal (pip3 on mac, if pip does not work):
   ```bash
   pip install openai
   ```
   ```bash
   pip install Flask
   ```
   ```bash
   pip install -U flask-cors
   ```
5. Open the main.py file
   
6. You need to take in your own OpenAI API key, where it says 'YOUR API KEY HERE'.

```bash
openai.api_key = 'YOUR API_KEY HERE!'
```
NB! Remeber to include '..' on each side of your API key. 
So it will look something like this:

```bash
open.api_key = 'sk-123...'
```
   
7. Start the Flask server (by pressing the run button or the command under). Make sure you run the main.py file.
```bash
flask run
```

## Usage

If your backend is running correctly. You will see this in the terminal:
```bash
* Running on all addresses (0.0.0.0)
* Running on http://127.0.0.1:4040
* Running on http://10.111.80.161:4040
```
You will copy the third IP address from after HTTP://. In this case that means 10.111.80.161:4040. (NB! These numbers will differ from which IP address you are on. So on your computer make sure to copy the THIRD IP address and the numbers that match your terminal.)

After copying these numbers and making sure your server is running, we move over to the React Native project.

### Move to frontend in VScode
You are now in the React Native project and will open these folders which you can find on the left side: src  -> screens -> GenererDagsplan.js
In the GenererDagsplan.js file, you will see this code at the start:

```python
export default function GenererDagsplan({navigation}) {
    const [inputValue, setInputValue] = useState('');
    const [response, setResponse] = useState(''); // For å lagre svaret fra GPT
    const [isLoading, setIsLoading] = useState(false);


    const handleGeneratePlan = async () => {
        setIsLoading(true); 
        try {
            // Send input til backend for å få svar fra GPT-3 ved bruk av fetch
            const response = await fetch(`http://10.111.80.161:4040/generateDay`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                
                body: JSON.stringify({ input: inputValue })
                
            });
```

In the code, you are going to change the numbers after "http://" to the numbers you copied in the backend project terminal.

```bash
 const response = await fetch(`http://CHANGE THIS NUMBERS/generateDay`
```

The numbers in the backend project and frontend project must always match to make the prototype work.


## Troubleshooting
If you have problems make sure you have installed all the necessary packages and modules.


## NOTE
When using the prototype, you will notice that generating the travel and generating the day will take quite some time.
Please be patient. It is where the prototype takes your input and sends it to ChatGPT trough the OpenAI API key,
and are returning the chatGPT response.

If something is wrong, you will get an error and an explanation.

NB! The connection on Eudoroam does often not work.







