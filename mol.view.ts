namespace $.$$ {
	export class $hyoo_mol extends $.$hyoo_mol {
		
		Placeholder() {
			if( this.spread() === 'docs' ) return this.Docs().Placeholder()
			if( !this.spread() ) return super.Placeholder()
			return null as any
		}
		
	}
}
