#pragma header

#define mainImage main
#define iChannel0 bitmap
#define fragColor gl_FragColor
#define texture flixel_texture2D
void mainImage()
{
    vec2 iResolution = openfl_TextureSize;
    vec2 fragCoord = openfl_TextureCoordv*openfl_TextureSize;
    vec2 uv = fragCoord/iResolution.xy;
    vec4 color = texture(iChannel0, uv);
    
    vec2 direction = normalize( uv - vec2(0.5) );
    direction *= distance( uv, vec2(0.5) );        
    direction *= vec2(1.0)/iResolution.xy;
    direction *= 7.0;

    color.r = texture(iChannel0, uv - direction ).r;    

    fragColor = color;
}