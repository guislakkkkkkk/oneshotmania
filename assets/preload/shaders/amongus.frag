#pragma header

#define mainImage main
#define iChannel0 bitmap
#define fragColor gl_FragColor
#define texture flixel_texture2D
void mainImage()
{
    vec2 iResolution = openfl_TextureSize;
    vec2 fragCoord = openfl_TextureCoordv*openfl_TextureSize;
    vec2 uv = fragCoord.xy / iResolution.xy;
    
    vec4 original = texture(iChannel0, uv);
    
    vec3 custom = vec3(0.0, 2.0, 1.0); 
    
    vec4 color = vec4(original.rgb * custom, original.a);
    
    fragColor = color;
}
