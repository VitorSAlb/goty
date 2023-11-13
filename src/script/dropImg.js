const dropArea = document.getElementById('drop-area');
    const fileInput = document.getElementById('imagesLink');

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('dragover');
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('dragover');
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('dragover');

        const files = e.dataTransfer.files;
        if (files.length > 0) {
            fileInput.files = files;
        }
    });

    fileInput.addEventListener('change', () => {
        // Aqui você pode adicionar código para lidar com a seleção de arquivo
        console.log('Arquivo selecionado:', fileInput.files[0]);
    });