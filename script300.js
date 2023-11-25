  document.getElementById('copyButton').addEventListener('click', function() {
            copyToClipboard('seu-codigo-pix-aqui');
            alert('Código Pix copiado para a área de transferência!');
        });

        function copyToClipboard(text) {
            var dummy = document.createElement('textarea');
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
        }