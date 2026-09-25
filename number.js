/*
function convertbase(x,b1,b2) {
	d="0123456789ABCDEFX";
	x=x.replace(/ /,"");
	x=x.toUpperCase();
	y=0;
//	return b1+b2;
	for(i=x.length, s=1; i>=1; i--,s*=b1) {
		c = x.charAt(i-1);
		for(j=0; j<b1+1; j++) {
			if( j==b1 ) {
				y = "bad input number";
				return y;
			}
			if( c == d.charAt(j) )
				break;
		}
		y+=j*s;
	}
	x=y;
 	if( x==0 ) return "0";
 	y="";
 	for(s=1; s<=x; s*=b2);
 	if( x!=s ) s/=b2;
 	for(p=s; p>=1; p/=b2) {
 		i = Math.floor(x/p);
 		y+= d.charAt(i);
 		x-= i*p;
 	}
	return y;
}
function convertbase2(x,b1,b2) {
	x = parseInt(x, b1);
	y = x.toString(b2);
	return y;
}
*/
var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }
    return gcd(b, a % b);
};

var gcd2 = function(a, b, f) {
	if( f )
	{
	    if ( b<=1 )
	        return a;
    }
    else
	{
	    if ( !b )
	        return a;
    }
    return gcd2(b, a % b, f);
};

function digits_after_period(x)
{
	f = x.toString();
	i = f.indexOf('.');
	len = f.length-i-1;
	return len;
}

function parseFraction(s)
{
	var n1=n2=0;
	var sign=n3=1;
	i = s.indexOf(' ');
	if( i==0 ) s=s.substring(1);
	i = s.indexOf('-');
	if( i==0 ) {s=s.substring(1); sign=-1;}
	i = s.indexOf(' ');
	if( i==0 ) s=s.substring(1);
	i = s.indexOf(' ');
	if( !isNaN(parseInt(s)) && isFinite(s) ) i=s.length;
	if( i!=-1 ) 
	{
		n1 = parseInt(s.substring(0,i));
		s = s.substring(i+1);
	}
	i = s.indexOf('/');
	if( i!=-1 )
	{
		n2 = parseInt(s.substring(0,i));
		s = s.substring(i+1);
		n3 = parseInt(s);
	}
	return [sign,n1,n2,n3];
}
