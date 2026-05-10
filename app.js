function showMessage(text){
  const msg = document.getElementById('msg');
  if (msg) msg.textContent = text;
}

function signup(){
  showMessage('Signup button is working. Connect Firebase Auth to enable real signup.');
}

function login(){
  showMessage('Login button is working. Connect Firebase Auth to enable real login.');
}

function adminLogin(){
  const pwd = document.getElementById('adminPassword').value;
  if (pwd === 'admin123') {
    document.getElementById('loginBox').style.display = 'none';
    document.getElementById('adminPanel').style.display = 'block';
  } else {
    alert('Wrong password');
  }
}

async function uploadQuestionsJSON(){
  const input = document.getElementById('jsonFile');
  if (!input.files.length) {
    alert('Please choose a file');
    return;
  }
  try {
    const text = await input.files[0].text();
    const questions = JSON.parse(text);
    if (!Array.isArray(questions)) throw new Error('JSON must be an array');

    let count = 0;
    for (const q of questions) {
      let options = q.options || [q.option1, q.option2, q.option3, q.option4].filter(Boolean);
      if (!q.question || !options.length || !q.answer) continue;
      await window.db.collection('questions').add({
        question: q.question,
        options,
        answer: q.answer,
        section: q.section || ''
      });
      count++;
    }
    alert(count + ' questions uploaded successfully.');
  } catch (e) {
    alert('Upload failed: ' + e.message);
  }
}
