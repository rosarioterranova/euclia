var attaccato : boolean = false;

function OnCollisionEnter(myCol: Collision){
 	if (myCol.gameObject.tag == "protagonista"){ //se collide con il protagonista
		if (attaccato == false)	{
			life3.attacco = true;
			attaccato = true;
		}
		else {
			aspetta();
		}
	}
	else if(myCol.gameObject.tag == "percorso" || myCol.gameObject.tag == "ostacolo" || myCol.gameObject.tag == "protagonista"){ //se collide con il percorso salta
       		this.rigidbody.velocity = Vector3(0,8,0);
	}
}

function aspetta()
    {
        yield WaitForSeconds(2);
        attaccato = false;
    }