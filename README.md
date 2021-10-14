<h1>Titolo</h1>

<h5>Table of Contents</h5>
<ol>
    <li><a href="#built">Built With</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#considerations">Considerations</a></li>
    <li><a href="#contact">Contact</a></li>
</ol>

<h3 id="built">Built With</h3>
<ul>
    <li><a href="https://www.npmjs.com/package/axios">Axios</a> per la get request della rest API</li>
    <li><a href="https://reactrouter.com/">React Router</a> per impostare il routing delle varie pagine</li>
    <li><a href="https://react-icons.github.io/react-icons/">React Icons</a> per l'icona nel convertitore</li>
</ul>

<h3 id="usage">Usage</h3>
<p>L'uso è abbastanza semplice: nella home page si trova il convertitore, nel quale una volta inserito l'ammontare da convertire basta sceglie una delle valute disponibile nel menù, una volta cliccato sul tasto, e dopo aver selezionato la valuta desiderata apparirà a schermo il risultato</p>

<p>Il form nella pagina contatti, come da richiesta, mostra i dati dei vari input compilati in console sotto forma di oggetto, e in aggiunta grazie a hookbin invia una richiesta post alla loro api e poi dal sito è possibile vedere il body del form: https://hookbin.com/E7Z8NzljbKIVjY66jjp3 </p>

<h3 id="considerations">Considerations</h3>
<p>Questo è stato un esercizio molto interessante e di valore per me; sebbene a posteriori può sembrare semplice, ammetto che ho avuta alcuni intoppi nell'implementazione della logica, ma rimunginandoci un po' sopra e informandomi sono riuscito a superarli. <br />
Il convertitore funziona solo da Euro a una qualsiasi valuta e non al contrario perchè con la chiave gratuita dell'API non è possibile cambiare la base del convertitore. <br />
Ovviamente uno step ulteriore sarebbe implementare un tipo di controllo per l'input del numero, per fare in modo che non si possano inserire numeri negativi o testi e sarebbe giusto anche formattare i numeri e arrotondarli a 2 cifre dopo la virgola. 
Il motivo per cui non ho fatto ciò, oltre al tempo, è che non mi sentirei a mio agio ad andare a cercare e inserire algoritmi da internet che non sono miei.
</p>

<h3 id="contact">Contact</h3>
<p>Markiyan Kmit - business.kmit@gmail.com</p>

<p>Project Link: https://github.com/mark1yan0/test-doubleyou</p>
