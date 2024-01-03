1. **Cos'è JavaScript?** JavaScript è un linguaggio di programmazione che consente di aggiungere funzionalità interattive e altri contenuti dinamici alle pagine web.
2. **Qual è la differenza tra JavaScript e Java?** Java è un linguaggio di programmazione orientato agli oggetti, mentre JavaScript è un linguaggio di scripting orientato agli oggetti.
3. **Come si collega un file JavaScript a un file HTML?** Un file JavaScript si può collegare tramite il comando **script**all'interno del file HTML e l'aggiunta del link di riferimento del file Js.
4. **Cosa significa DOM in JavaScript?** DOM è l'acronimo di Document Object Model che vuole indicare una rappresentazione in forma di albero di un documento HTML che permette di manipolare in modo dinamico il contenuto di una pagina web. 
5. **Come si dichiara una variabile in JavaScript?** Una variabile si dichaiara attraverso i comadi **var**,**let** e **const** in cui ad una parola assagnata aggiungiamo il valore della variabile
6. **Quali sono i tipi di dati in JavaScript?** JavaScript prevede cinque tipi di dati: (primitivi, numeri, stringhe, booleani, null e undefined), e un tipo di dato complesso, gli oggetti.
7. **Cos'è una funzione in JavaScript e come si dichiara?** Una funzione è un insieme di istruzioni racchiuse in un blocco di codice, che può essere contraddistinto da un nome, può accettare argomenti o parametri di ingresso e restituire valori. Per dichiararla si scrive la parola **function** seguita dal nome della funzione, delle parentesi tonde in cui viene inserito l'argomento e delle parentesi graffe in cui inserire cosa farà quella funzione. 
8. **Come si crea un oggetto in JavaScript?** 
La notazione letterale di oggetto in JavaScript è una sintassi che consente di creare un nuovo oggetto in modo diretto e conciso. L'oggetto è definito all'interno di parentesi graffe {} e può contenere una lista di coppie chiave-valore.
9. **Cosa sono le espressioni e gli operatori in JavaScript?** Un'espressione è una combinazione di valori, variabili ed operatori che rappresentano un nuovo valore. JavaScript prevede operatori unari, binari e ternari a seconda che possano combinare rispettivamente uno, due o tre valori.
Invece gli operatori in JavaScript sono simboli o parole chiave che permettono di eseguire operazioni specifiche tra variabili, costanti o valori letterali.
10. **Cos'è un array in JavaScript?** 
In JavaScript, un array è un oggetto che rappresenta una collezione ordinata di elementi. Gli elementi in un array possono essere di qualsiasi tipo di dato, inclusi numeri, stringhe, oggetti e altri array. Gli array in JavaScript sono una delle strutture dati più utilizzate e versatili nel linguaggio.
11. **Qual è la differenza tra == e === in JavaScript?** la differenza principale sta nel fatto che **==** serve solo per verificare se se due valori siano uguali mentre con l'**===** verifichi se aNCHE il tipo è uguale o no e in entrami i casi ti restituisce come valore **true** o **false**.
12. **Come si scrive un commento in JavaScript?** In Javascript, un commento si scrive aggiungendo **//** prima del commento se vuoi commentare sulla stessa riga, oppure aggiungere /* e */ se vuoi commentare su più righe.
13. **Quali sono i cicli in JavaScript e come funzionano?** In JavaScript, i cicli sono strutture di controllo che consentono di eseguire ripetutamente un blocco di codice fino a quando una determinata condizione è soddisfatta.
In JavaScript, ci sono principalmente due tipi di cicli: il ciclo **for** e il ciclo **while**.
Il ciclo **for** è utilizzato quando il numero di iterazioni è noto a priori mentre il ciclo **while** è utilizzato quando la condizione di continuazione non è nota a priori e deve essere verificata prima di ogni iterazione. 
14. **Cosa sono le variabili var, let e const?** Sono i tre modi in cui può essere definita una variabile. Mentre **var** e **let** hanno la possibilità di essere modificati, la variabile **const** ha la peculiarità di non poter essere riassegnata poichè definita in precedenza.Inoltre le variabili di tipo **var** hanno uno scope globale, o di funzione (locale), mentre quelle dichiarate con **let** e **const** hanno scope di blocco (locale).
15. **Cos'è la "hoisting" in JavaScript?** L'hoisting (sollevamento) è un meccanismo per cui una variabile dichiarata con **var** viene resa disponibile prima della sua dichiarazione. Questo è possibile perché il linguaggio Javascript legge tutte le dichiarazioni in anticipo e le mette a disposizione a monte dell'esecuzione.
16. **Come funziona il garbage collection in JavaScript?** l Garbage Collection (o raccolta automatica dei rifiuti) è un meccanismo fondamentale in JavaScript che gestisce la gestione della memoria. In JavaScript, i programmatori non gestiscono direttamente la memoria come in linguaggi di basso livello, come C o C++. Invece, il Garbage Collector si occupa automaticamente di deallocare la memoria che non è più utilizzata, liberando risorse e prevenendo le perdite di memoria.
17. **Cos'è un callback in JavaScript?** Un callback è una funzione passata come argomento di un'altra funzione.
Questo significa che la funzione genitore è solitamente costruita per poter utilizzare qualsiasi tipo di funzione. D'altro canto, la funzione callback è progettata per un caso specifico (o un numero limitato di utilizzi) in cui viene usata la funzione genitore.
18. **Come si manipola il DOM con JavaScript?** Il DOM  può essere manipolato in vari modi, ma il più comune è quello di recuperarli attraverso il comando **document.** + l'elemento che vogliamo recuperare ovvero con **document.getElementById**, **document.getElementsByClassName**, **document.getElementsByTagName**, **document.querySelector**, e **document.querySelectorAll**. Da qui sarà possibile recuperare gli elementi richiesti e manipolarli attraverso definizioni di variabili e funzioni.
19. **Cosa sono gli eventi in JavaScript?** In JavaScript, gli eventi rappresentano le interazioni degli utenti con la pagina web. Un evento può essere qualsiasi cosa, dal clic del mouse **('click')** all'invio di un modulo **('submit')**, dal caricamento di una pagina **('DOMContentLoaded')** alla pressione di un tasto sulla tastiera **('keypress')**. La programmazione degli eventi consente di catturare queste interazioni e rispondere ad esse con del codice JavaScript.
Per richiamare gli eventi bisogna utilizzare il modulo **(.addEventListener)**.
20. **Come si previene il comportamento predefinito di un evento?** 
Per prevenire il comportamento predefinito di un evento in JavaScript, puoi utilizzare il metodo **preventDefault()** dell'oggetto evento associato all'evento. Questo è particolarmente utile quando si desidera annullare il comportamento predefinito di un link, di un modulo o di altri elementi interattivi.
21. **Cosa sono le espressioni regolari in JavaScript?** 
Le espressioni regolari, o regex, in JavaScript sono oggetti che rappresentano modelli di stringhe. Sono utilizzate per la ricerca e la manipolazione di testo basandosi su determinati criteri di corrispondenza. Le espressioni regolari forniscono una potente sintassi per definire modelli di stringhe complessi, permettendo di effettuare ricerche avanzate, sostituzioni e altre operazioni su testi.
22. **Come si cattura un errore con try-catch?** Questo costrutto sintattico è presente in molti linguaggi di programmazione e si usa questo quando si devono intercettare e maneggiare possibili errori per evitare che l'applicazione vada in "crash". Il codice da eseguire viene inserito dentro al blocco **try**, nel caso che qualcosa non funzioni come aspettato, l'errore viene catturato dal **catch** e il codice al suo interno viene eseguito.
23. **Cosa sono le promesse in JavaScript?** In JavaScript, le promesse (promises) sono un concetto fondamentale che permette di gestire asincronia in modo più efficiente e leggibile rispetto agli approcci basati su callback. Una promessa rappresenta il risultato eventualmente disponibile di un'operazione asincrona, che può essere un successo o un fallimento.
24. **Cos'è l'asincronia in JavaScript?** L'asincronia in JavaScript si riferisce alla gestione di operazioni che non seguono il flusso di esecuzione sincrona del programma. In un contesto sincrono, le istruzioni vengono eseguite una dopo l'altra, e il controllo non passa alla successiva fino a quando l'attuale non è completata. In un ambiente asincrono, le operazioni possono essere avviate, ma il controllo non attende il loro completamento e continua con l'esecuzione del resto del codice.
25. **Come funzionano async e await?** Le parole chiave async e await sono state introdotte in ECMAScript 2017 (ES8) per semplificare la gestione del codice asincrono in JavaScript, rendendolo più leggibile e simile a codice sincrono. Queste parole chiave sono spesso utilizzate insieme, ma è importante capire come funzionano separatamente.n particolare, la parola chiave async consente di dichiarare una funzione come asincrona, cioè che contiene un'operazione asincrona, mentre la parola chiave await sospende l'esecuzione di una funzione in attesa che la Promise associata ad un'attività asincrona venga risolta o rigettata.
26. **Cosa significa "this" in JavaScript?** In JavaScript, la parola chiave this ci consente di riutilizzare funzioni in diversi contesti di esecuzione. Vale a dire che una funzione, una volta definita, può essere chiamata per oggetti diversi usando la parola chiave this e,inoltre,di identificare l'oggetto nel contesto di esecuzione corrente quando chiamiamo un metodo.
27. **Come si implementa l'ereditarietà in JavaScript?**
28. **Quali sono i metodi di un array in JavaScript?**
29. **Come si invia una richiesta AJAX?**
30. **Quali sono i template literals in JavaScript?**
31. Come si usa JSON in JavaScript?
32. Qual è lo scopo di una funzione IIFE?
33. Cosa sono i moduli in JavaScript?
34. Come si gestisce la compatibilità cross-browser?
35. Cos'è il BOM (Browser Object Model)?
36. Qual è la differenza tra innerHTML e textContent?
37. Come si utilizza localStorage e sessionStorage?
38. Cosa sono le arrow functions?
39. Come funziona il binding in JavaScript?
40. Quali sono le differenze tra i metodi map, filter e reduce?
41. Come si usano le espressioni condizionali in JavaScript?
42. Qual è la differenza tra un metodo e una funzione?
43. Cosa sono le proprietà di un oggetto?
44. Come si clona un oggetto?
45. Cosa significa essere "falsy" o "truthy"?
46. Qual è lo scopo del metodo forEach in un array?
47. Come si usa setInterval e setTimeout?
48. Cosa sono i WebSockets?
49. Cosa sono e come si usano i Service Workers?
50. Come si ottimizza il rendimento di un'applicazione JavaScript?
51. Quali sono le principali novità introdotte in ES6?
52. Come funzionano i closure in JavaScript?
53. Cosa sono e come si utilizzano i generatori?
54. Qual è la differenza tra null e undefined?
55. Come si utilizza il destructuring?
56. Cosa sono i mixin in JavaScript?
57. Quali sono i principi della programmazione funzionale in JavaScript?
58. Come si usa il metodo fetch per le richieste HTTP?
59. Cosa sono e come si usano i Proxy in JavaScript?
60. Come si fa il debugging di un'applicazione JavaScript?
61. Qual è la differenza tra un oggetto e una mappa?
62. Come si usa il pattern Singleton in JavaScript?
63. Cosa sono i Polyfills?
64. Come si verifica il tipo di un oggetto in JavaScript?
65. Cosa sono e come si usano le WeakMaps e WeakSets?
66. Quali sono i metodi per la manipolazione delle stringhe?
67. Come si usano le variabili d'ambiente in JavaScript?
68. Cosa sono i Transpilers?
69. Qual è lo scopo del use strict?
70. Come si usano i decoratori in JavaScript?
71. Quali sono le differenze tra un framework e una libreria?
72. Come funziona l'event loop in JavaScript?
73. Quali sono i vantaggi dell'utilizzo di TypeScript?
74. Cosa sono gli Higher Order Functions?
75. Come si gestiscono le eccezioni in JavaScript?
76. Qual è il ruolo di un costruttore in JavaScript?
77. Cosa sono e come si usano i Tagged Template Literals?
78. Quali sono le buone pratiche per scrivere codice JavaScript pulito?
79. Come si fa il testing di codice JavaScript?
80. Quali sono le principali caratteristiche di Node.js?
81. Cosa sono e come si usano i middleware in Express.js?
82. Come si gestisce l'autenticazione in un'app JavaScript?
83. Qual è la differenza tra un metodo statico e un metodo di istanza?
84. Come si utilizzano i worker threads in JavaScript?
85. Cosa sono e come funzionano gli Iterator e i generatori?
86. Come si ottimizza il caricamento di script esterni?
87. Cosa sono le Shadow DOM e come si usano?
88. Quali sono le strategie per gestire lo stato in un'applicazione JavaScript?
89. Cosa sono gli Observable?
90. Quali sono le tecniche per il data binding in JavaScript?
91. Come si implementa il pattern Factory in JavaScript?
92. Cosa sono i componenti Web e come si usano?
93. Come si gestiscono i conflitti tra versioni di dipendenze?
94. Quali strumenti si usano per il linting e la formattazione del codice?
95. Come si gestisce la memoria in JavaScript?
96. Quali sono le tecniche per scrivere codice asincrono efficiente?
97. Cosa sono i Web Components?
98. Come si utilizza il Canvas API in JavaScript?
99. Quali sono le best practice per la gestione degli errori?
100. Come si implementa l'internazionalizzazione in un'app JavaScript?