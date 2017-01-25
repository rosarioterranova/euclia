var attaccato : boolean = false;

function OnCollisionEnter(myCol: Collision){ //se collide con un ostacolo torna indietro
    if(myCol.gameObject.tag == "protagonista"){
		if (attaccato == false)	{
			life2.attacco = true;
			attaccato = true;
		}
		else {
			aspetta();
		}
	}
}

function aspetta()
    {
        yield WaitForSeconds(2);
        attaccato = false;
    }