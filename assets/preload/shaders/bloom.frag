#pragma header

#define mainImage main
#define iChannel0 bitmap
#define fragColor gl_FragColor
#define texture flixel_texture2D
//BASED IN https://www.shadertoy.com/view/lsXGWn
const float blurSize = 1.0/512.0;
const float intensity = 0.35;
void mainImage()
{
	vec4 sum = vec4(0);
	vec2 iResolution = openfl_TextureSize;
    vec2 fragCoord = openfl_TextureCoordv*openfl_TextureSize;
	vec2 texcoord = fragCoord.xy/iResolution.xy;
	int j;
	int i;
		
	//thank you! http://www.gamerendering.com/2008/10/11/gaussian-blur-filter-shader/ for the 
	 //blur tutorial
	// blur in y (vertical)
	// take nine samples, with the distance blurSize between them
	sum += texture(bitmap, vec2(texcoord.x - 4.0*blurSize, texcoord.y)) * 0.05;
	sum += texture(bitmap, vec2(texcoord.x - 3.0*blurSize, texcoord.y)) * 0.09;
	sum += texture(bitmap, vec2(texcoord.x - 2.0*blurSize, texcoord.y)) * 0.12;
				
	sum += texture(bitmap, vec2(texcoord.x, texcoord.y - 4.0*blurSize)) * 0.05;
	sum += texture(bitmap, vec2(texcoord.x, texcoord.y - 3.0*blurSize)) * 0.09;
	
	fragColor = sum*intensity + texture(bitmap, texcoord); 
}