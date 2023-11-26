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


        document.getElementById('copyButton').addEventListener('click', function() {
            var plan = document.getElementById('planSelector').value;
            var code = getCodeForPlan(plan);
            var imagePath = getImagePathForPlan(plan);

            document.getElementById('qrCodeImage').src = imagePath;

            copyToClipboard(code);

            alert('Código Pix copiado para área de transferência para o ' + plan);
        });

        function getCodeForPlan(plan) {
            
            if (plan === '300') {
                return 'codigo-pix-para-o-plano-1';
            } else if (plan === '600') {
                return 'codigo-pix-para-o-plano-2';
            } else {
                return 'codigo-pix-padrao';
            }
        }

        function getImagePathForPlan(plan) {

            if (plan === '300') {
                return 'caminho-para-imagem-plano-1.png';
            } else if (plan === '600') {
                return 'caminho-para-img';
            } else{
                return 'caminho-para-img';
            }
        }

        function copyToClipboard(text) {
            var dummy = document.createElement('textarea');
            document.body.appendChild(dummy);
            dummy.value = text;
            dummy.select();
            document.execCommand('copy');
            document.body.removeChild(dummy);
        }