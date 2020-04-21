varying vec3 vUv;
uniform vec3 colorD;
uniform vec3 colorC;

void main() {
gl_FragColor = vec4(mix(colorC, colorD, vUv.z), 1.0);
}


