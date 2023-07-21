#pragma header

#define DIM 1.8
#define DIRECTIONSs 18.
#define QUALITYs 7.5
#define SIZE 75.
#define pi 6.28
//2*Pi=6.28318530718

#define uv openfl_TextureCoordv.xy

const float stepQ = 1./QUALITYs;
const float dimDir = DIM*QUALITYs*DIRECTIONSs-15.;
uniform float alpha;

void main(void)
{
float QUALITY = QUALITYs;
float DIRECTIONS = DIRECTIONSs;
float lll = length(texture2D(bitmap,uv).rgb)*0.5;
float SRX = lll*SIZE/openfl_TextureSize.x;
float SRY = lll*SIZE/openfl_TextureSize.y;
if (lll < 0.25*0.5) {
QUALITY = 0.;
DIRECTIONS = 0.;
}

vec4 accColor = vec4(0.0);

for (float i = stepQ; i <= 1.; i += stepQ) {
float lengths = length(texture2D(bitmap,uv).rgb);
if (lengths >= 0.6) {
accColor += vec4(1.0, 0.0, 0.0, 1.0);
}
}
gl_FragColor = accColor;
}
//HEIHUA uses a shader modified from the bloom.Frag.