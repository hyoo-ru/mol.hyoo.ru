namespace $.$$ {
	export class $hyoo_mol extends $.$hyoo_mol {

		@$mol_mem
		hubhabRedirect() {
			if (this.$.$mol_state_arg.value('section') === 'articles') {
				document.location.assign(document.location.href.replace(/^.*\#/, 'https://habhub.hyoo.ru/#'))
			}
		}

		auto() {
			this.hubhabRedirect()
		}
		
		Placeholder() {
			if( this.spread() === 'docs' ) return this.Docs().Placeholder()
			if( !this.spread() ) return super.Placeholder()
			return null as any
		}
		
	}
}
