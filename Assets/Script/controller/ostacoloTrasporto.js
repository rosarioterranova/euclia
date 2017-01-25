var ostacoli : GameObject[];
var attaccato : boolean = false;

function Start () {
	ostacoli = GameObject.FindGameObjectsWithTag("ostacolo");
}

function OnCollisionEnter(myCol: Collision){
    if(myCol.gameObject.tag == "protagonista"){ //collissione con i tag (creare nuovo tag)
    	GameObject.Find("car crash").audio.Stop();
    	GameObject.Find("car crash").audio.Play();
    	this.gameObject.transform.position.z=100;
       	this.gameObject.SetActive(false);
       	if (attaccato == false)	{
					lifeCar.attacco = true;
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